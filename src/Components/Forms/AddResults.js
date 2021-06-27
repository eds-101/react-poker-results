const AddResults = (onSubmit) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Date:
        <input type="date" name="date" />
      </label>
      <label>
        Winner:
        <input type="text" name="winner" />
      </label>
      <label>
        Second Place:
        <input type="text" name="secondPlace" />
      </label>
      <label>
        3rd:
        <input type="text" name="thirdPlace" />
      </label>
      <label>
        4th:
        <input type="text" name="fourthPlace" />
      </label>
      <label>
        5th:
        <input type="text" name="fifthPlace" />
      </label>
      <label>
        6th:
        <input type="text" name="sixthPlace" />
      </label>
      <label>
        7th:
        <input type="text" name="seventhPlace" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default AddResults
