const Input = ({name,value,label,onChange ,type="text"}) => {
    return (  <div className="mb-3">
        <label htmlFor={name}>{label}:</label>
        <input
          onChange={onChange}
          // value={value}
          id={name}
          name={name}
          className="form-control"
          type={type}
          {...(type !== "file" && {value})}
        />
      </div>);
}
 
export default Input;