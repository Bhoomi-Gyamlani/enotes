import React, { useEffect } from "react";

const EditNoteModal = ({ note = {}, onChange, onClose, onSave, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      const modalElement = document.getElementById("editNoteModal");
      const modalInstance = new window.bootstrap.Modal(modalElement, {
        backdrop: "static",
        keyboard: false,
      });
      modalInstance.show();

      return () => {
        modalInstance.hide();
      };
    }
  }, [isOpen]);

  const handleSave = async () => {
    try {
      await onSave();
      onClose();
    } catch (error) {
      console.error("Failed to save note:", error);
      alert("Error saving note. Please try again.");
    }
  };

  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      id="editNoteModal"
      tabIndex="-1"
      aria-labelledby="editNoteModalLabel"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editNoteModalLabel">Edit Note</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSave();
              }}
            >
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  value={note.etitle || ""}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  value={note.edescription || ""}
                  onChange={onChange}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="form-label">Tag</label>
                <input
                  type="text"
                  className="form-control"
                  id="etag"
                  name="etag"
                  value={note.etag || ""}
                  onChange={onChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNoteModal;
