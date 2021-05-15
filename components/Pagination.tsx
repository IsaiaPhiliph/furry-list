export default function Pagination({ page, lastPage, setPage }) {
    return (
        <div>
            <button
                className="p-4 bg-gray-300 text-gray-900 font-bold rounded-md shadow-md mx-4"
                onClick={() => {
                    page > 1 && setPage(page - 1);
                }}
            >
                {"<"}
            </button>
            {page}
            <button
                className="p-4 bg-gray-300 text-gray-900 font-bold rounded-md shadow-md mx-4"
                onClick={() => {
                    page < lastPage && setPage(page + 1);
                }}
            >
                {">"}
            </button>
        </div>
    );
}
