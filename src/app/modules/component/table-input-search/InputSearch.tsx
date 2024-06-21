import "./InputSearch.scss"

type Props = {
  handleSearch: React.Dispatch<React.SetStateAction<string>>
}

const InputSearch = ({handleSearch}: Props) => {
  return (
    <div className="search-container">
      <input className="table-search-input" onChange={(e)=> handleSearch(e.target.value)} />
    </div>
  )
}

export default InputSearch
