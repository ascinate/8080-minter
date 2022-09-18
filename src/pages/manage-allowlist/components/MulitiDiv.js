import React , {useState} from "react";
import Select from "react-select";



function MulitiDiv(){
    const [selectedOptions, setSelectedOptions] = useState();

    const optionList = [
        { value: "op1", label: "Option 1" },
        { value: "op2", label: "Option 2" },
        { value: "op3", label: "Option 3" },
    ];
    function handleSelect(data) {
        setSelectedOptions(data);
      }




    return(
        <>
        <div className="comn-mult">
                <Select
                options={optionList}
                placeholder="Search wallet address"
                value={selectedOptions}
                onChange={handleSelect}
                isSearchable={true}
                isMulti
                
                />
        </div>
        

        </>
    )
};
export default MulitiDiv;