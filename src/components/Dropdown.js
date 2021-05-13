export function DropDown({
    dropDownListItems
}) {

    const dropDownItems = dropDownListItems.map((item) => (
        item.handleClick ?
            <li key={item.name} className="py-2 cursor-pointer font-semibold" onClick={item.handleClick}>{item.name} </li> :
            <li key={item.name} className="py-2">{item.name}</li>
    ))
    return (
        <ul className="bg-white py-4 px-4 mt-3 rounded-2xl absolute md:right-1 lg:right-16 sm:w-1/2 lg:w-1/4">
            {dropDownItems}
        </ul>
    )
}