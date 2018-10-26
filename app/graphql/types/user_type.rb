module Types
  class UserType < Types::BaseObject

    graphql_name "User"
    field :id, ID, null: false
    field :username, String, null: false
    field :admin, Boolean, null: false
    field :email, String, null: true

  end
end


# OLD SYNTAX
# UserType = GraphQL::ObjectType.define do
#   name "User"
#
#   field :id, !types.ID
#   field :username, !types.String
#   field :admin, types.Boolean
#   field :email, types.String
# end
