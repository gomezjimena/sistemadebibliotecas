/* eslint-disable @typescript-eslint/no-explicit-any */

//Users

export const getUsers = async () => {
  try {
    const res = await fetch('/api/usuario', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}; 

//Libro

export const getLibros = async () => {
  try {
    const res = await fetch('/api/libro', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error('Error al obtener libros');
    return res.json();
  } catch (error) {
    console.error('Error en getLibros:', error);
    throw error;
  }
};

export const crearLibro = async (data: any) => {
  try {
    const res = await fetch('/api/libro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Error al crear libro');
    return res.json();
  } catch (error) {
    console.error('Error en crearLibro:', error);
    throw error;
  }
};

export const deleteLibro = async (id: string) => {
  try {
    const res = await fetch(`/api/libro/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error('Error al eliminar libro');
    return res.json();
  } catch (error) {
    console.error('Error en deleteLibro:', error);
    throw error;
  }
};

export const editarLibro = async (id: string, datos: any) => {
  try {
    const res = await fetch(`/api/libro/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos),
    });

    if (!res.ok) throw new Error('Error al editar libro');
    return await res.json();
  } catch (error) {
    console.error('Error en editarLibro:', error);
    throw error;
  }
};

export const actualizarEstadoLibro = async (id: string, nuevoEstado: string) => {
  try {
    const res = await fetch(`/api/libro/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ estado: nuevoEstado }),
    });

    if (!res.ok) throw new Error('Error al actualizar estado');
    return res.json();
  } catch (error) {
    console.error('Error en actualizarEstadoLibro:', error);
    throw error;
  }
};

//Reserva

export const getReservas = async () => {
  try {
    const res = await fetch('/api/reserva', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error('Error al obtener reservas');
    return res.json();
  } catch (error) {
    console.error('Error en getReservas:', error);
    throw error;
  }
};

export const crearReserva = async (data: any) => {
  try {
    const res = await fetch(`/api/reserva`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('Error al crear reserva');
    return res.json();
  } catch (error) {
    console.error('Error en crearReserva:', error);
    throw error;
  }
};
