class FindRecord < GraphQL::Function
  attr_reader :type

  def initialize(model:, type:)
    @model = model
    @type = type
  end

  argument :id, GraphQL::ID_TYPE

  def call(obj, args, ctx)
     @model.find(args.id)
  end
end

module Types
  class QueryType < GraphQL::Schema::Object

    description "The query root of this schema"

    # query fields

    field :users, [Types::UserType], null: false, resolve: ->(obj, args, ctx) { User.all }
    field :user, function: FindRecord.new(model: User, type: UserType)

    field :reviews, [Types::ReviewType], null: false, resolve: ->(obj, args, ctx) { Review.all }
    field :review, function: FindRecord.new(model: Review, type: ReviewType)
    # field :reviews, [Types::ReviewType], null: false,
    #   resolve: ->(obj, args, ctx) { Review.all }

    field :locations, [Types::LocationType], null: false, resolve: ->(obj, args, ctx) { Location.all }
    field :location, function: FindRecord.new(model: Location, type: LocationType)

    # field :location, LocationType, null: true do
    #   description "Find a location by ID"
    #   argument :id, ID, required: true
    # end

    # implementations

    # def locations
    #   Location.all
    # end

    # def location(id:)
    #   Location.find(id)
    # end

  end
end

# OLD SYNTAX
# Types::QueryType = GraphQL::ObjectType.define do
#   name 'allUsers'
#
#   # queries are just represented as fields
#   field :users, types[Types::UserType] do
#     # resolve would be called in order to fetch data for that field
#     resolve -> (obj, args, ctx) { User.all }
#   end
# end

# template generated by graphql-ruby generator
# module Types
#   class QueryType < Types::BaseObject
#     # Add root-level fields here.
#     # They will be entry points for queries on your schema.
#
#     # TODO: remove me
#     field :test_field, String, null: false,
#       description: "An example field added by the generator"
#     def test_field
#       "Hello World!"
#     end
#   end
# end