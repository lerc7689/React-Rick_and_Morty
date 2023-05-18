import { useEffect, useState } from "react";

// Paginación
// Es dividir en grupos mas pequeños una lista de elementos
// Por lo tanto minimamente se necesitan dos datos: la lista y la cantidad de elementos que debe tener cada grupo

//  0 1 2 3 4 5 6 7 8 9
// [1,2,3,4,5,6,7,8,9,10]

// Paginar en grupos de 3

//  0 = 3 x 0 = 3 x (1 - 1)
//      2 = 3 - 1 = (3 x 1) - 1
// [1,2,3] -> Pagina 1

//  3 = 3 x 1 = 3 x (2 - 1)
//      5 = 6 - 1 = (3 x 2) - 1
// [4,5,6] -> Pagina 2

//  6 = 3 x 2 = 3 x (3 - 1)
//      8 = 9 - 1 = (3 x 3) - 1
// [7,8,9] -> Pagina 3

//  9 = 3 x 3 = 3 x (4 - 1)
//       11 = 12 - 1 = (3 x 4) - 1
// [10,?,?] -> Pagina 4

// limiteInferior = quantity * (numberPage - 1)
// limiteSuperior = quantity * numberPage - 1

// Logica + Estado === Hook

export const usePagination = (list = [], quantityPerPage) => {
    const [pageNumber, setPageNumber] = useState(1);

    const lowerLimit = quantityPerPage * (pageNumber - 1);
    const upperLimit = quantityPerPage * pageNumber - 1;
    const totalPages = Math.ceil(list.length / quantityPerPage);

    const listSlice = list.slice(lowerLimit, upperLimit + 1);

    const changePageTo = (page) => {
        if (page > totalPages) setPageNumber(totalPages);
        else if (page < 1) setPageNumber(1);
        else setPageNumber(page);
    };

    const pages = Array(totalPages)
        .fill()
        .map((_, i) => i + 1);

    useEffect(() => {
        setPageNumber(1);
    }, [quantityPerPage]);

    //   return { currentPage: pageNumber, listSlice, pages, changePageTo };
    return [pageNumber, listSlice, pages, changePageTo];
};