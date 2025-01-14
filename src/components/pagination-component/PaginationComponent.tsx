import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'})
    let currentPage = Number(query.get('page') || '1')
    return (
        <div>
            <button onClick={() => {
                if (currentPage > 0) {
                    setQuery({page: (--currentPage).toString()})
                }
            }}>prev
            </button>
            <button onClick={() => {
                setQuery({page: (++currentPage).toString()})
            }}>next
            </button>
        </div>
    );
};