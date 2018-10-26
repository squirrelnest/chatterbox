class YarrbleSchema < GraphQL::Schema
  # mutation(Types::MutationType)
  query(Types::QueryType)
  # query(QueryType)
end

# OLD SYNTAX
# YarrbleSchema = GraphQL::Schema.define do
#   query QueryType
# end
