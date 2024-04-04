
function Tags( { idLogement } ) {

  const listOfTags = idLogement.tags;

  return (
    <div className="tags">
      {listOfTags.map(tag => (
        <p>
          {tag}
        </p>
      )
    )}
    </div>
  )
}

export default Tags;