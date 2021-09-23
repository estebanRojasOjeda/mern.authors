import { Table, Button } from 'reactstrap';
import Swal from 'sweetalert2';
import { BsFillReplyAllFill, BsFillTrashFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import axios from "axios";

const View = () => {
    const [authorItem, setAuthorItem] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/all')
            .then(res => {
                console.log(res.data.authors);
                setAuthorItem(res.data.authors);
                console.log(authorItem)
            })
            .catch(err => Swal.fire('Error getting products', 'Error getting the products list', 'error'));
    }, [])

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre Autor</th>
                    <th colSpan={'2'}>Acciones</th>
                </tr>
            </thead>
            <tbody>

                {authorItem.length > 0 && authorItem.map((p, i) => {
                    return (<tr key={i}>
                        <th>{p._id}</th>
                        <td>{p.name}</td>
                        <td><Button color="primary"><BsFillReplyAllFill></BsFillReplyAllFill></Button></td>
                        <td><Button color="danger"><BsFillTrashFill></BsFillTrashFill></Button></td>
                    </tr>);
                })
                }
            </tbody>
        </Table>
    )
}

export default View;