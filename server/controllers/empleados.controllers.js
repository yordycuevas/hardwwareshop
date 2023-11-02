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
      
      "SELECT * FROM empleados WHERE id_empleado = ?",
      
      [req.params.id_empleado]
      
    );
    if (result.length === 0) {
      res
        .status(404)
        .json({ message: `Empleado ${req.params.id_empleado} no encontrado` });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEmpleado = async (req, res) => {
  try {
    const { nombre, apellido, tipo_documento, numero_documento, direccion, telefono, email, id_ciudad  } = req.body;
    // Check for null values
    if (!nombre || !apellido || !tipo_documento || !numero_documento || !direccion || !telefono || !email || !id_ciudad ) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }
    const [result] = await pool.query("INSERT INTO empleados SET ?", {
      nombre,
      apellido,
      tipo_documento,
      numero_documento,
      fecha_nacimiento,
      tipo_contrato,
      direccion,
      telefono,
      id_sucursal
    });
    res.json({
      id_empleado: result.insertId,
      nombre,
      apellido,
      tipo_documento,
      numero_documento,
      fecha_nacimiento,
      tipo_contrato,
      direccion,
      telefono,
      id_sucursal
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM empleados WHERE id_empleado = ?",
      [req.params.id_empleado]
    );

    // Check if client exists
    if (rows.length === 0) {
      return res.status(404).json({ message: "El Empleado no existe" });
    }

    const result = await pool.query(
      "UPDATE empleados SET ? WHERE id_empleado = ?",
      [req.body, req.params.id_empleado]
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM empleados WHERE id_empleado = ?",
      [req.params.id_empleado]
    );
    if (result.affectedRows === 0) {
      res
        .status(404)
        .json({ message: `Empleado ${req.params.id_empleado} no encontrado` });
    }
    res.json({ message: `Empleado ${req.params.id_empleado} eliminado` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
