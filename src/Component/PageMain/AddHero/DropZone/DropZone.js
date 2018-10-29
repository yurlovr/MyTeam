import React, { Component } from "react";

class DropZone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlight: false
    };

    this.dragEnter = this.dragEnter.bind(this);
    this.dragLeave = this.dragLeave.bind(this);
    this.preventDefaults = this.preventDefaults.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    // this.uploadFile = this.uploadFile.bind(this);
    this.dragOver = this.dragOver.bind(this);
  }

  render() {
    return (
      <label className="registration__label registration__label-photo">
        Фото
        <sup className="registration__label-index">*</sup>
        <div
          className={
            this.state.highlight
              ? "registration__input registration__input-textarea registration__input-textarea-highlight"
              : "registration__input registration__input-textarea"
          }
          id="photo"
          onDragEnter={this.dragEnter}
          onDragLeave={this.dragLeave}
          onDragOver={this.dragOver}
          onDrop={this.handleDrop}
        >
          Чтобы добавить фото героя перетащите изображение в это поле или просто
          кликните сюда
        </div>
        <input
          type="file"
          id="fileElem"
          multiple
          accept="image/*"
          onChange={this.handleFiles}
          className="registration__input registration__input-mobile"
        />
      </label>
    );
  }

  dragEnter(event) {
    this.preventDefaults(event);
    this.setState({
      highlight: !this.state.highlight
    });
  }

  dragLeave(event) {
    this.preventDefaults(event);
    this.setState({
      highlight: !this.state.highlight
    });
  }

  dragOver(event) {
    this.preventDefaults(event);
    this.setState({
      highlight: !this.state.highlight
    });
  }

  handleDrop(event) {
    this.preventDefaults(event);
    let dt = event.dataTransfer;
    let files = dt.files;
    if (files.length > 1) {
      alert("Выберите один файл");
    } else {
      this.handleFiles(files);
    }
  }

  handleFiles(files) {
    this.props.data(files);
  }

  preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}

export default DropZone;
