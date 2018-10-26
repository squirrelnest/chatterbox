# README

Yarrble is a web (and soon mobile) app that enables recreational sailors to find and share information (coordinates, photos, reviews, sea state data) about anchorages (ports, marinas, as well as undeveloped harbors or bays) around the world. It's like Yelp for anchorages, except the user reviews are akin to the ACE reports.

# Demo

https://www.youtube.com/watch?v=U5X_Ggbzc9I

# Configuration

Frontend: React and Redux ([refactored out of jQuery](https://medium.com/@mikkanthrope/migrating-to-react-5536447f5b67))
Backend: Ruby 2.3.6, Rails 5, Postgres, PostGIS, GraphQL
Infrastructure: AWS (EC2, RDS), Packer AMI

# System dependencies

Mapbox API
rack-cors
activerecord
React
Redux
GraphQL

# Deployment instructions

1) Install [PostgreSQL](https://www.postgresql.org/download/) and [postGIS](https://postgis.net/install/)
2) Install [Ruby 2.5.1](https://www.ruby-lang.org/en/documentation/installation/)
3) Install Bundler gem: `gem install bundler`
4) Install gems: `bundle install`
5) Install [Node.js](https://nodejs.org/en/download/)
6) Install npm modules: `npm install`
7) Git clone this repo
8) Run `rake start` (starts both frontend and backend servers)

# Contributions

Contributions are welcome! Just make a pull request and we'll review it shortly.
