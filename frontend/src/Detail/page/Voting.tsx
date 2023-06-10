import { deleteVote, postVote } from '../service/Update';
import { Document } from '../interface/DetailInterface';

const Voting = (event: React.MouseEvent<HTMLButtonElement>, docId: number, data: Document) => {
    const target = event.target as HTMLButtonElement;
    const progressBar = document.getElementById('progress-bar-in') as HTMLDivElement;
    const count = document.getElementById('count') as HTMLDivElement;

    if (target.classList.contains('voted')) {
        target.classList.remove('voted');
        target.setAttribute('disabled', '');
        deleteVote(docId).then(() => {
            target.removeAttribute('disabled');
        });
        data.voteCnt--;
    }
    else {
        target.classList.add('voted');
        target.setAttribute('disabled', '');
        postVote(docId).then(() => {
            target.removeAttribute('disabled');
        });
        data.voteCnt++
    }
    progressBar.style.width = (data.voteCnt / data.goal * 100) + '%';
    count.textContent = data.voteCnt + ' / ' + data.goal;
}

export default Voting;