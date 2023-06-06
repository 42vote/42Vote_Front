import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AccountCircle from "@mui/icons-material/AccountCircle";
import './StatDialog.css';

interface StatDialogProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function StatDialog(props: StatDialogProps) {
    const emails = ["sojoo", "yachoi", "yonshin", "joupark", "heeskim", "hyunjcho", "sunghkim", "jonhan", "mykang", "jbok", "ahhlee", "jnam", "hjeong"];
    //api로 투표자 목록 받아오기 -> api 응답 데이터가 이상해요...

    return (
        <Dialog onClose={()=>props.setIsOpen(false)} open={props.isOpen}>
            <DialogTitle>Voter List</DialogTitle>
            <List>
                <div className="users">
                    {emails.map((email) => (
                            <ListItem>
                                <ListItemButton onClick={()=>window.open("https://profile.intra.42.fr/users/" + email)}>
                                    <AccountCircle/>
                                    <ListItemText primary={email}/>
                                </ListItemButton>
                            </ListItem>
                    ))}
                </div>
                <ListItem className="close-button">
                    <ListItemButton onClick={()=>props.setIsOpen(false)}>
                        <ListItemText primary="close" className="close-button"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>
    )
}

export default StatDialog;