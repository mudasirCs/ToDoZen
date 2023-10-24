import dateHandler from "./dateHandler";

export default function createItem(
  title,
  description,
  notes,
  dueDate,
  priority,
  completedStatus
) {
  const _dateCreated = dateHandler.getTodaysDate();
  let _dueDate = dateHandler.validateDate(dueDate);

  return {
    get dateCreated() {
      return _dateCreated;
    },
    get dueDate() {
      return _dueDate;
    },
    set dueDate(newDate) {
      _dueDate = dateHandler.validateDate(newDate);
    },
    title,
    description,
    notes,
    priority,
    completedStatus,
  };
}
