export default function TapButton({ children, onSelect, isSelected }) {
    function handleClick() {

    }
    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}