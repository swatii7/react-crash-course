
export default function TabButton({label, onClick, className}) {
  return (
    <div>
      <li>
        <button className={className} onClick={onClick}>
            {label}
        </button>
      </li>
    </div>
  )
}
