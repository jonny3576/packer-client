import React from 'react';

export class AuctionStatusImage extends React.Component {

     static getBidStatus(route, driverID){
        const currentBid = route.currentBid;
        const ownBids = route.auctionBids.filter(bid => bid.owner === driverID);
        let lowestBid;
        if (ownBids.length === 0){
            lowestBid = currentBid + 1;
        } else if (ownBids.length === 1){
            lowestBid = ownBids[0].bid;
        } else{
            lowestBid = ownBids.reduce(function (a, b) { return a.bid < b.bid ? a.bid : b.bid; });
        }
        const auctionOver = route.auctionOver;

        if(auctionOver && (currentBid === lowestBid)){
            return "winner";
        } else if(!auctionOver && (currentBid === lowestBid)){
            return "leader";
        } else if(auctionOver && (currentBid < lowestBid)){
            return "looser";
        } else if(!auctionOver && (currentBid < lowestBid)) {
            return "nonleader";
        }
    }
    render() {
        let auctionStatus;
        if(this.props.biddingState === undefined) {
            auctionStatus = AuctionStatusImage.getBidStatus(this.props.route, this.props.driverID);
        } else{
            auctionStatus = this.props.biddingState;
        }

        if(auctionStatus === "winner"){
            return <img
                src="/Images/winner.png"
                height={this.props.scale}
                alt="Winner"
                title="Congratulation, you won the auction!"
            />;
        } else if(auctionStatus === "leader"){
            return <img
                src="/Images/leader.png"
                height={this.props.scale}
                alt="CheckBox"
                title="You are currently leading the auction!"
            />;
        } else if(auctionStatus === "looser"){
            return <img
                src="/Images/looser.png"
                height={this.props.scale}
                alt="Thumps down"
                title="Your bid was to high. You lost the auction!"
            />;
        } else if(auctionStatus === "nonleader") {
            return <img
                src="/Images/nonleader.png"
                height={this.props.scale}
                alt="Red Cross"
                title="You are currently not leading the auction. Enter a lower bid to become the leader!"
            />;
        }
    }
}