import Form from "react-bootstrap/Form";

export const GenericSelect = ({ onNewValue, valuesToDisplay }) => {
  const updateRowLength = (event) => {
    onNewValue(event.target.value);
  };

  return (
    <Form.Select size="lg" onChange={updateRowLength} style={{ width: "6rem" }}>
      {valuesToDisplay.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </Form.Select>
  );
};
