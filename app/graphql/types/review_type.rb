class FindLocation < GraphQL::Function
  attr_reader :type

  def initialize(model:, type:)
    @model = model
    @type = type
  end

  def call(obj, args, ctx)
     @model.find(obj.location_id)
  end
end

module Types
  class ReviewType < Types::BaseObject

    graphql_name "Review"
    field :id, ID, null: false
    field :createdAt, GraphQL::Types::ISO8601DateTime, null: false
    field :updatedAt, GraphQL::Types::ISO8601DateTime, null: false
    field :locationId, ID, null: false
    field :userId, ID, null: false
    field :stability, Integer, null:false
    field :safety, Integer, null: true
    field :aesthetics, Integer, null: true
    field :amenities, Integer, null: true
    field :content, String, null: false

    field :location, function: FindLocation.new(model: Location, type: LocationType)

    # field :location, LocationType, null: true do
    #   description "Find a location by ID"
    #   argument :id, ID, required: true
    # end
    #
    # # field :location, LocationType.connection_type, null: true
    #
    # def location(id:)
    #   Review.find(id).location
    # end

  end
end

# OLD SYNTAX
# LocationType = GraphQL::ObjectType.define do
#   name "Location"
#
#   field :id, !types.ID
#   field :nickname, !types.String
#   field :lonlat, types.Integer
#   field :country, types.String
# end
