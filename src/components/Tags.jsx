function Tags( { tags } ) {


  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <p key={index}>
          {tag}
        </p>
      )
    )}
    </div>
  )
}

export default Tags;