import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import '../styles/WhiteListDialog.css';
import { WhiteListDialogProps } from "../types";
import TextField, { TextFieldClassKey, TextFieldVariants } from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import { customAxios } from "../../Lib/customAxios";
import Swal from "sweetalert2";

function WhiteListDialog(props: WhiteListDialogProps) {
    const addList = (e: React.FormEvent<HTMLFormElement>, whiteList: Array<string>, setWhiteList: React.Dispatch<React.SetStateAction<Array<string>>>) => {
        e.preventDefault();
        let id = document.getElementById("intraID") as HTMLInputElement || null;
        if (whiteList.find((user) => user === id.value))
            Swal.fire('이미 추가한 사용자입니다.');
        else {
            customAxios().get('/user/find/' + id.value).then(()=>{
                setWhiteList([...whiteList, id.value]);
            }).catch(()=>{
                Swal.fire('존재하지 않는 사용자입니다.');
            });
            id.value = '';
        }
    }
    
    return (
        <Dialog id="white-list" onClose={()=>props.setIsOpen(false)} open={props.isOpen}>
            <DialogTitle>White List</DialogTitle>
            <List>
                <div className="users">
                    {props.whiteList.map((user) => (
                        <ListItem key={user}>
                            <ListItemText primary={user}/>
                        </ListItem>
                    ))}
                </div>
                <form onSubmit={(e)=>addList(e, props.whiteList, props.setWhiteList)}>
                    <TextField id="intraID" label="intraID" variant="outlined"/>
                </form>
                <ListItem className="close-button">
                    <ListItemButton onClick={()=>props.setIsOpen(false)}>
                        <ListItemText primary="close" className="close-button"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>
    )
}

export default WhiteListDialog;