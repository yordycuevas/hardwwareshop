import { pool } from "../database.js";


export const getClientes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM  clientes");

    if (result.length === 0) {
      return res.status(404).json({ message: "No hay clientes disponibles" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCliente = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM clientes WHERE clienteid = ?",
      [req.params.clienteid]
    );
    if (result.length === 0) {
      res
        .status(404)
        .json({ message: `Cliente ${req.params.clienteid} no encontrado` });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  try {
    const { nombre, apellido, dni, direccion, telefono, email } = req.body;
    // Check for null values
    if (!nombre || !apellido || !dni || !direccion || !telefono || !email) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }
    const [result] = await pool.query("INSERT INTO clientes SET ?", {
      nombre,
      apellido,
      dni,
      direccion,
      telefono,
      email,
    });
    res.json({
      clienteid: result.insertId,
      nombre,
      apellido,
      dni,
      direccion,
      telefono,
      email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM clientes WHERE clienteid = ?",
      [req.params.clienteid]
    );

    // Check if client exists
    if (rows.length === 0) {
      return res.status(404).json({ message: "El cliente no existe" });
    }

    const result = await pool.query(
      "UPDATE clientes SET ? WHERE clienteid = ?",
      [req.body, req.params.clienteid]
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM clientes WHERE clienteid = ?",
      [req.params.clienteid]
    );
    if (result.affectedRows === 0) {
      res
        .status(404)
        .json({ message: `Cliente ${req.params.clienteid} no encontrado` });
    }
    res.json({ message: `Cliente ${req.params.clienteid} eliminado` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
