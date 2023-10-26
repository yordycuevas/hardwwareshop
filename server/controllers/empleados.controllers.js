import { pool } from "../database.js";


export const getEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM  empleados");

    if (result.length === 0) {
      return res.status(404).json({ message: `No hay empleados dispobibles`});
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM empleados WHERE empleadoid = ?",
      [req.params.empleadoid]
    );
    if (result.length === 0) {
      res
        .status(404)
        .json({ message: `Empleado ${req.params.empleadoid} no encontrado` });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEmpleado = async (req, res) => {
  try {
    const { nombre, apellido, dni, direccion, telefono, email } = req.body;
    // Check for null values
    if (!nombre || !apellido || !dni || !direccion || !telefono || !email) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }
    const [result] = await pool.query("INSERT INTO empleados SET ?", {
      nombre,
      apellido,
      dni,
      direccion,
      telefono,
      email,
    });
    res.json({
      empleadoid: result.insertId,
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

export const updateEmpleado = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM empleados WHERE empleadoid = ?",
      [req.params.empleadoid]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "El empleado no existe" });
    }

    const result = await pool.query(
      "UPDATE empleados SET ? WHERE empleadoid = ?",
      [req.body, req.params.empleadoid]
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM empleados WHERE empleadoid = ?",
      [req.params.empleadoid]
    );
    if (result.affectedRows === 0) {
      res
        .status(404)
        .json({ message: `Empleado ${req.params.empleadoid} no encontrado` });
    }
    res.json({ message: `Empleado ${req.params.empleadoid} eliminado` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
