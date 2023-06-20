import { deleteVote, postVote } from '../service/Update';
import { Document } from '../interface/DetailInterface';
import { customAxios } from '../../Lib/customAxios';
import Swal from 'sweetalert2';

const displayBar = (data: Document) => {
    const progressBar = document.getElementById('progress-bar-in') as HTMLDivElement;
    const count = document.getElementById('count') as HTMLDivElement;

    progressBar.style.width = (data.voteCnt / data.goal * 100) + '%';
    count.textContent = data.voteCnt + ' / ' + data.goal;
}

const voteReq = (target: HTMLButtonElement, docId: number, data: Document) => {
    target.classList.add('voted');
    target.setAttribute('disabled', '');
    postVote(docId).then(() => {
        target.removeAttribute('disabled');
    });
    data.voteCnt++
    displayBar(data);
}

const Voting = (event: React.MouseEvent<HTMLButtonElement>, docId: number, data: Document) => {
    const target = event.target as HTMLButtonElement;

    if (target.classList.contains('voted')) {
        target.classList.remove('voted');
        target.setAttribute('disabled', '');
        deleteVote(docId).then(() => {
            target.removeAttribute('disabled');
        });
        data.voteCnt--;
        displayBar(data);
    } else if (!data.multipleVote) {
        customAxios().get('/vote/me', {params: {categoryId: data.categoryId}}).then((res) => {
            if (res.data.length > 0) {
                Swal.fire({
                    text: '동일한 카테고리의 글에 이미 투표하셨습니다. 투표 중인 글의 투표를 취소하고 이 글에 투표하시겠습니까?',
                    showCancelButton: true,
                    confirmButtonColor: 'white',
                    cancelButtonColor: '#383838',
                    confirmButtonText: 'OK'
                }).then((res) => {
                    if (res.isConfirmed)
                        voteReq(target, docId, data);
                });
            } else
                voteReq(target, docId, data);
        })
    } else
        voteReq(target, docId, data);

}

export default Voting;