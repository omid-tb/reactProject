import { Button } from "react-bootstrap";
import {handleEdit} from'../../pages/Users';

const editbutton = (row) => {
    return (
        <Button type="submit" color="success" onClick={() => handleEdit(row)}>ویرایش</Button>

    );
}
export default editbutton