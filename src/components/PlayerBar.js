import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="fas fa-step-backward"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'fas fa-pause' : 'fas fa-play'}></span>
          </button>
          <button id="next">
            <span className="fas fa-step-forward" onClick={this.props.handleNextClick}></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">-:--</div>
          <input type="range" className="seek-bar" value="0" />
          <div className="total-time">-:--</div>
        </section>
        <section id="volume-control">
          <div className="fas fa-volume-down"></div>
          <input type="range" className="seek-bar" value="80" />
          <div className="fas fa-volume-up"></div>
        </section>
      </section>
    );
  }
}

export default PlayerBar