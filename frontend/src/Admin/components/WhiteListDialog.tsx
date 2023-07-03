import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CancelIcon from '@mui/icons-material/Cancel';
import { WhiteListDialogProps } from "../types";
import TextField from "@mui/material/TextField";
import { addList, deleteList } from "../logics/Logics";
import '../styles/WhiteListDialog.css';

function WhiteListDialog(props: WhiteListDialogProps) {    
    return (
        <Dialog id="white-list" onClose={()=>props.setIsOpen(false)} open={props.isOpen}>
            <DialogTitle>White List</DialogTitle>
            <List>
                <div className="users">
                    {props.whiteList.map((user) => (
                        <ListItem key={user}>
                            <ListItemText primary={user} secondary={props.state !== 1 ? <CancelIcon onClick={()=>deleteList(user, props.whiteList, props.setWhiteList)}/> : null}/>
                        </ListItem>
                    ))}
                </div>
                {
                    props.state !== 1 &&
                    (<form onSubmit={(e)=>addList(e, props.whiteList, props.setWhiteList)}>
                        <TextField id="intraID" label="intraID" variant="outlined"/>
                    </form>)
                }
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