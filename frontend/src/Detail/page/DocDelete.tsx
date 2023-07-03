import Swal from "sweetalert2";
import NotFound from "../../Etc/NotFound";
import { deleteDocument } from "../service/Update";
import { NavigateFunction } from "react-router-dom";

const DocDelete = (docId: string, nav: NavigateFunction) => {
    Swal.fire({
        text: '글을 삭제하시겠습니까?',
        showCancelButton: true,
        confirmButtonColor: 'white',
        cancelButtonColor: '#383838',
        confirmButtonText: 'Delete'
    }).then((res) => {
        if (res.isConfirmed) {
            deleteDocument(docId).then(() => {
                Swal.fire('삭제되었습니다.').then(() => nav(-1));
            }).catch((err) => {
                if (err.response.status === 404)
                    return (<NotFound/>)
            });
        }
    });
}

export default DocDelete;