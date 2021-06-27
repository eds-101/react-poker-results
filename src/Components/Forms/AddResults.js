const AddResults = () => {
  return (
    <form>
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
        <input type="text" name="second" />
      </label>
      <label>
        3rd:
        <input type="text" name="third" />
      </label>
      <label>
        4th:
        <input type="text" name="fourth" />
      </label>
      <label>
        5th:
        <input type="text" name="fifth" />
      </label>
      <label>
        6th:
        <input type="text" name="sixth" />
      </label>
      <label>
        7th:
        <input type="text" name="seventh" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default AddResults
