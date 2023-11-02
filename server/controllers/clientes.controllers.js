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
      "SELECT * FROM clientes WHERE id_cliente = ?",
      [req.params.id_cliente]
    );
    if (result.length === 0) {
      res
        .status(404)
        .json({ message: `Cliente ${req.params.id_cliente} no encontrado` });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  try {
    const { nombre, apellido, tipo_documento, numero_documento, direccion, telefono, email, id_ciudad  } = req.body;
    // Check for null values
    if (!nombre || !apellido || !tipo_documento || !numero_documento || !direccion || !telefono || !email || !id_ciudad ) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }
    const [result] = await pool.query("INSERT INTO clientes SET ?", {
      nombre,
      apellido,
      tipo_documento,
      numero_documento,
      direccion,
      telefono,
      email,
      id_ciudad
    });
    res.json({
      id_cliente: result.insertId,
      nombre,
      apellido,
      tipo_documento,
      numero_documento,
      direccion,
      telefono,
      email,
      id_ciudad
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM clientes WHERE id_cliente = ?",
      [req.params.id_cliente]
    );

    // Check if client exists
    if (rows.length === 0) {
      return res.status(404).json({ message: "El cliente no existe" });
    }

    const result = await pool.query(
      "UPDATE clientes SET ? WHERE id_cliente = ?",
      [req.body, req.params.id_cliente]
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM clientes WHERE id_cliente = ?",
      [req.params.id_cliente]
    );
    if (result.affectedRows === 0) {
      res
        .status(404)
        .json({ message: `Cliente ${req.params.id_cliente} no encontrado` });
    }
    res.json({ message: `Cliente ${req.params.id_cliente} eliminado` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
