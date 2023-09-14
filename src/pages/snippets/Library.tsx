import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useSearchParams } from 'react-router-dom';
import LoadingGIF from '../../assets/loading.gif';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { SnippetType } from '../../types';

import '../../utils/imports/ace-languages';
import '../../utils/imports/ace-themes';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-modelist';
import SnippetLayout from './SnippetLayout';

const Home = () => {
  // const { auth } = useAuth();
  const [snippets, setSnippets] = useState<SnippetType[]>([]);
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteSnippetId, setDeleteSnippetId] = useState<string>('');
  const [pending, setPending] = useState<boolean>(false);

  // if search params change set snippets to new data
  const axiosPrivate = useAxiosPrivate();

  const getAllMySnippets = async () => {
    try {
      const q = searchParams.get('q') || '';
      const page = searchParams.get('page') || '1';
      const limit = searchParams.get('limit') || '10';

      const response = await axiosPrivate.get(
        `/snippets/my?q=${q}&page=${page}&limit=${limit}`
      );
      setSnippets(response.data.data.snippets);
    } catch (error) {
      setSnippets([]);
      console.log(error);
    }
  };

  const deleteSnippet = async () => {
    try {
      await axiosPrivate.delete(`/snippets/${deleteSnippetId}`);
      await getAllMySnippets();
      setIsModalOpen(false);
      setPending(false);
      toast.success('Snippet deleted successfully');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    getAllMySnippets();
  }, [searchParams]);

  return (
    <SnippetLayout>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
          },
        }}
      />
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-2">
          <div className="bg-white max-w-lg w-full p-5 rounded-lg shadow-2xl">
            <div className="border-b mb-3">
              <h2 className="text-xl font-bold mb-4">Delete snippet</h2>
            </div>
            <div>
              <p className="text-gray-700">
                Are you sure you want to delete this snippet?
              </p>
            </div>
            <div className="mt-3">
              {!pending && (
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setDeleteSnippetId('');
                  }}
                  className="px-3 py-1 text-white bg-gray-500 hover:bg-gray-600 rounded-lg mr-3"
                >
                  Cancel
                </button>
              )}
              <button
                onClick={() => {
                  setPending(true);
                  deleteSnippet();
                }}
                className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-lg"
              >
                {pending ? (
                  <div className="flex items-center gap-x-1">
                    <span>
                      <img src={LoadingGIF} alt="Loading" className="w-5 h-5" />
                    </span>
                    <span>Deleting...</span>
                  </div>
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold"
                    >
                      Language
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-md font-bold"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {snippets.map((snippet: SnippetType, index: number) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">
                        {snippet.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {snippet.language}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold flex gap-x-5">
                        <Link
                          to={`/p/${snippet.uid}/edit`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Edit
                        </Link>
                        <a
                          onClick={() => {
                            setIsModalOpen(true);
                            setDeleteSnippetId(snippet.uid);
                          }}
                          className="text-red-500 hover:text-red-700"
                          href="#"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </SnippetLayout>
  );
};

export default Home;
