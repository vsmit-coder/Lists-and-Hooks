const Data = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa, at natus accusamus magnam neque officia illo tempore quasi repellat!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa, at natus accusamus magnam neque officia illo tempore quasi repellat!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa, at natus accusamus magnam neque officia illo tempore quasi repellat!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa, at natus accusamus magnam neque officia illo tempore quasi repellat!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa, at natus accusamus magnam neque officia illo tempore quasi repellat!',
  ];
  
function List() {
    const listItems = Data.map((detail,index) =>
        <li key={index}>{detail}</li>
    );
    return (
    <ul>{listItems}</ul>
    )
}
export default List;