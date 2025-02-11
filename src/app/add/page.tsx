import Form from "next/form";

const AddCarPage = () => {
    return (
        <>
            <Form action={'/cars'}>
                <input type="text" name={'brand'} placeholder='brand'/>
                <input type="number" name={'year'} placeholder='year'/>
                <input type="number" name={'price'} placeholder='price'/>
                <button>add</button>
            </Form>
        </>
    );
};
export default AddCarPage