import { pool } from "../database.js";


export const getClientes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM  clientes");

    if (result.length === 0) {
      return res.status(404).json({ message: `No hay clientes dispobibles`});
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCliente = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM clientes WHERE ID_CLIENTE = ?",
      [req.params.ID_CLIENTE]
    );
    if (result.length === 0) {
      res
        .status(404)
        .json({ message: `Cliente ${req.params.ID_CLIENTE} no encontrado` });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  try {
    const { ID_CLIENTE, NOMBRE, APELLIDO, TELEFONO, DIRECCION, ID_DOCUMENTO, CORREO, FECHA_NACIMIENTO, ID_GENERO  } = req.body;
    // Check for null values
    if (!ID_CLIENTE, !NOMBRE, !APELLIDO, !TELEFONO, !DIRECCION, !ID_DOCUMENTO, !CORREO, !FECHA_NACIMIENTO, !ID_GENERO ) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }
    const [result] = await pool.query("INSERT INTO clientes SET ?", {
      ID_CLIENTE,
      NOMBRE,
      APELLIDO,
      TELEFONO,
      DIRECCION,
      ID_DOCUMENTO,
      CORREO,
      FECHA_NACIMIENTO,
      ID_GENERO
    });
    res.json({
      ID_CLIENTE: result.insertId,
      ID_CLIENTE,
      NOMBRE,
      APELLIDO,
      TELEFONO,
      DIRECCION,
      ID_DOCUMENTO,
      CORREO,
      FECHA_NACIMIENTO,
      ID_GENERO
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM clientes WHERE ID_CLIENTE = ?",
      [req.params.ID_CLIENTE]
    );

    // Check if client exists
    if (rows.length === 0) {
      return res.status(404).json({ message: "El cliente no existe" });
    }

    const result = await pool.query(
      "UPDATE clientes SET ? WHERE ID_CLIENTE = ?",
      [req.body, req.params.ID_CLIENTE]
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM clientes WHERE ID_CLIENTE = ?",
      [req.params.ID_CLIENTE]
    );
    if (result.affectedRows === 0) {
      res
        .status(404)
        .json({ message: `Cliente ${req.params.ID_CLIENTE} no encontrado` });
    }
    res.json({ message: `Cliente ${req.params.ID_CLIENTE} eliminado` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
