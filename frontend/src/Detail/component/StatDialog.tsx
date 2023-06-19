import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { StatDialogProps } from "../interface/DetailInterface";
import '../style/StatDialog.css';
import { getStatData } from "../service/GetData";
import { useEffect, useState } from "react";

function StatDialog(props: StatDialogProps) {
    const [emails, setEmails] = useState<string[]>([]);

    useEffect(() => {
        if (props.isOpen && !props.anony)
            getStatData(props.docId, setEmails);
    }, [props.isOpen]);

    return (
        <Dialog onClose={()=>props.setIsOpen(false)} open={props.isOpen}>
            <DialogTitle>Voter List</DialogTitle>
            <List>
                <div className="users">
                    {
                        props.anony ? (<div className="comment">익명 투표 카테고리이기 때문에 투표자 목록이 제공되지 않습니다.</div>) :
                        emails.length > 0 ? emails.map((email) => (
                            <ListItem key={email}>
                                <ListItemButton onClick={()=>window.open("https://profile.intra.42.fr/users/" + email)}>
                                    <AccountCircle/>
                                    <ListItemText primary={email}/>
                                </ListItemButton>
                            </ListItem>
                        )) : <div className="comment">No Voter</div>                   
                    }
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