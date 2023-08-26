
const DemoOption = ({options}) => {
    const {name, id} = options
    
    return (
        <option value={[name, id]}>{name}</option>
    );
};

export default DemoOption;