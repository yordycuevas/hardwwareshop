import { pool } from "../database.js";


export const getProveedores = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM  proveedores");

    if (result.length === 0) {
      return res.status(404).json({ message: `No hay proveedores dispobibles`});
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProveedor = async (req, res) => {
  try {
    const [result] = await pool.query(
      
      "SELECT * FROM proveedores WHERE NIT_PROVEEDORES = ?",
      
      [req.params.NIT_PROVEEDORES]
      
    );
    if (result.length === 0) {
      res
        .status(404)
        .json({ message: `Proveedor ${req.params.NIT_PROVEEDORES} no encontrado` });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProveedor = async (req, res) => {
  try {
    const { NIT_PROVEEDORES, NOMBRE, DIRECCION, CORREO, ID_CIUDAD, CONTACTO } = req.body;
    // Check for null values
    if (!NIT_PROVEEDORES || !NOMBRE || !DIRECCION || !CORREO || !ID_CIUDAD || !CONTACTO ) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }
    const [result] = await pool.query("INSERT INTO proveedores SET ?", {
      NIT_PROVEEDORES,
      NOMBRE,
      DIRECCION,
      CORREO,
      ID_CIUDAD,
      CONTACTO
    });
    res.json({
      NIT_PROVEEDORES: result.insertId,
      NOMBRE,
      DIRECCION,
      CORREO,
      ID_CIUDAD,
      CONTACTO
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProveedor = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM proveedores WHERE NIT_PROVEEDORES = ?",
      [req.params.NIT_PROVEEDORES]
    );

    // Check if client exists
    if (rows.length === 0) {
      return res.status(404).json({ message: "El proveedor no existe" });
    }

    const result = await pool.query(
      "UPDATE proveedores SET ? WHERE NIT_PROVEEDORES = ?",
      [req.body, req.params.NIT_PROVEEDORES]
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProveedor = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM proveedores WHERE NIT_PROVEEDORES = ?",
      [req.params.NIT_PROVEEDORES]
    );
    if (result.affectedRows === 0) {
      res
        .status(404)
        .json({ message: `Proveedor ${req.params.NIT_PROVEEDORES} no encontrado` });
    }
    res.json({ message: `Proveedor ${req.params.NIT_PROVEEDORES} eliminado` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
