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

module Types
  class LocationType < Types::BaseObject

    graphql_name "Location"
    field :id, ID, null: false
    field :nickname, String, null: false
    field :country, String, null: false

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
