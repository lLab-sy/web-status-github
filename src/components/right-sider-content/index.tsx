import Card from 'react-bootstrap/Card';

interface IProps {
    title: string;
    value: string;
}

function AllProject({ title, value }: IProps) {
    return (
        <Card className='text-center' style={{ width: '250px', paddingBottom: 'auto', marginBottom: "10px" }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{value}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AllProject;