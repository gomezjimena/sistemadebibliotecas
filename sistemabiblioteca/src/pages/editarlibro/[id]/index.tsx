import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LibroFormCard from '@/components/Molecules/FeatureCardFormLibro';
import FeatureCardLibro from '@/components/Molecules/FeatureCardLibro';
import { editarLibro, getLibros } from '@/utils/api';
import NavLibro from '@/components/Organisms/NavVistaSimple';

interface Libro {
  id: string;
  imagesrc: string;
  titulo: string;
  autor: string;
  categoria: string;
  paginas: number;
  estado: string;
  ubicacion: string;
}

const EditarLibroPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [libro, setLibro] = useState<any>(null);

  useEffect(() => {
      if (!id) return;
  
      const fetchLibro = async () => {
        try {
          const data = await getLibros();
          const libroEncontrado = data.find((libro: Libro) => libro.id === id);
          setLibro(libroEncontrado);
        } catch (error) {
          console.error('Error al cargar el libro:', error);
        }
      };
  
      fetchLibro();
  }, [id]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditar = async (datosEditados: any) => {
    try {
      await editarLibro(id as string, datosEditados);
      alert('Libro editado correctamente');
      router.push('/inventario');
    } catch (error) {

      console.error('Error al editar libro', error);
    }
  };

  if (!libro) return <div className="text-center mt-10">Cargando libro...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <NavLibro />
      <div className="flex flex-col  justify-center bg-[var(--color-bank4)] min-h-screen">

        <div className="flex flex-col md:flex-row gap-10  justify-center w-full max-w-6xl">

        <div>
          
          {/* Card Visual del Libro */}
          <FeatureCardLibro
            key={libro.id}
            id={libro.id}
            imagesrc={libro.imagesrc}
            titulo={libro.titulo}
            autor={libro.autor}
            categoria={libro.categoria}
            paginas={libro.paginas}
            estado={libro.estado}
            ubicacion={libro.ubicacion}
          />

        </div>

            <div className="flex flex-col ">
            <div className="w-full md:w-2/3">
                <LibroFormCard modo="editar" initialData={libro} onSubmit={handleEditar} />
            </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default EditarLibroPage;
