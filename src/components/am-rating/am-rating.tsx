import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';
/**
 * A simple rating component using StencilJS
 */
@Component({
  tag: 'am-rating',
  styleUrl: 'am-rating.css',
  shadow: true
})
export class AMRating {
   /**
   * The rating identifier
   */
  @Prop() reference: string = "rating-component";

   /**
   * Determines if the user can set a rating
   */
  @Prop() interactive: boolean = false;

  /**
   * The rating
   */
  @Prop() rating: number = 0;

  /**
   * The minimum rating possible
   */
  @Prop() minRating: number = 0;

  /**
   * The maximum rating possible
   */
  @Prop() maxRating: number = 5;

   /**
   * Determines if half ratings are allowed
   */
  @Prop() allowHalfRatings: boolean = false;

  /**
   * This is a star!
   */
  @Prop() svgPoints: string = "48 75 18.6107374 90.4508497 24.2235871 57.7254249 0.447174185 34.5491503 33.3053687 29.7745751 48 0 62.6946313 29.7745751 95.5528258 34.5491503 71.7764129 57.7254249 77.3892626 90.4508497";

  /**
   * The rating items, set once the component is loaded
   */
  @State() ratingItems: Array<object> = [];

  /**
   * The color to fill the rating with when it's within the max
   */
  @Prop() colorOn: string = "#000000";

  /**
   * The color to fill the rating with when it's outwith the max
   */
  @Prop() colorOff: string = "#ffffff";

  /**
   * The color to fill the rating with when it's outwith the max
   */
  @Prop() colorOutline: string = "#666666";

   /**
   * The direction of the shading.
   * Valid settings are 'ltr' (left to right) and 'ttb' (top to bottom)
   */
  @Prop() direction: string = "ltr";

   /**
   * The view box for the SVG
   */
  @Prop() svgViewBox: string = "0 0 100 100";

  /**
   * Event fired when the rating is updated by user input
   */
  @Event() ratingUpdated: EventEmitter;

  /**
   * Keeps the internal rating (prop rating cannot be reassigned)
   */
  private internalRating: number = 0;

  /**
   * Specifies the available gradient directions
   */
  private directionSettings = {
    'ltr' : { "x1" : "0", "x2" : "1","y1" : "0","y2" : "0" },
    'ttb' : { "x1" : "0", "x2" : "0","y1" : "0","y2" : "1" }
  };

  /**
   * Once the component is loaded do the setup
   */
  componentWillLoad() {
    this.internalRating = this.rating;
    this.createRatingItems();
  }

  /**
   * Create rating items
   */
  createRatingItems(){
    let items = [];

    const ratingFloor = Math.floor(this.internalRating);
    const ratingRemainder = this.internalRating % 1 * 100;

    for(var i = 0; i < this.maxRating; i++){
      const itemPercent = i < ratingFloor ? 100 : ( ratingFloor === i ? ratingRemainder : 0 );

      items.push({
        svgPoints : this.svgPoints,
        percent :  itemPercent + "%"
      });
    }

    this.ratingItems = items;
  }

  /**
   * Handle the mouse being pressed and update the internal rating
   */
  handleMouseDown(event) {
    let svgElement =  event.path[2];

    if(!svgElement.getBBox || !this.interactive){

      return;
    }

    const clickPos = event.offsetX;
    const svgWidth = svgElement.getBBox().width ;
    const clickPercentage = svgWidth/100*clickPos;

    let newRating = 0;
    while((svgElement=svgElement.previousSibling)!=null) ++newRating;

    newRating = this.allowHalfRatings ? ( newRating + (clickPercentage < 50 ? + 0.5 : 1) ) : ++newRating;
    this.updateRating( newRating );
  }

  updateRating(newRating){
    this.internalRating = newRating;
    this.createRatingItems();

    this.ratingUpdated.emit( {
      'reference' : this.reference,
      'rating' : this.internalRating
    });
  }

  /**
   * When the state changes,
   * render the view
   */
  render() {
    return (
      <div>
        {this.ratingItems.map( (ratingItem) =>
        <svg
          viewBox={this.svgViewBox}
          version="1.1"
          width='12px'
          height = '12px'
          xmlns="http://www.w3.org/2000/svg"
          class="rating-item"
          onMouseDown={ () => this.handleMouseDown(event) }
          >
            <defs>
              <linearGradient
                id={"fill-" + ratingItem['percent']}
                x1={this.directionSettings[this.direction]['x1']}
                x2={this.directionSettings[this.direction]['x2']}
                y1={this.directionSettings[this.direction]['y1']}
                y2={this.directionSettings[this.direction]['y2']}
              >
                <stop offset={ratingItem['percent']} stop-color={this.colorOn} stop-opacity="1"/>
                <stop offset={ratingItem['percent']}  stop-color={this.colorOff} stop-opacity="1"/>
              </linearGradient>
            </defs>
            <g
              stroke="none"
              stroke-width="1">
                <polygon
                  id="star"
                  stroke={this.colorOutline}
                  stroke-width="1"
                  class={"rating-item-shape rating-item-shape-fill-percent-" + ratingItem['percent']}
                  fill={"url(#fill-" +  ratingItem['percent'] + ")"}
                  points={ ratingItem['svgPoints'] }>
              </polygon>
            </g>
        </svg>
        )}
      </div>
    );
  }
}