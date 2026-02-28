let data = ([
  'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
  'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
  'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
  'Orders: shutdown! - Response: Yes Sr!',
  'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
])

function neuron(data)
{
    if (data.length === 0)
        return {};
    let result = {};
    for (const Curr of data)
    {
        let [left, right] = Curr.split(" - ");
        let [Type, QuestorOrder] = left.split(": ");
        let Response = right.split(": ")[1];
        Type = Type.toLowerCase();   // questions / orders / affirmations
        let Key = QuestorOrder.toLowerCase().replace(/\s+/g, "_").replace(/[?!]/g, "");
        // Create category if it doesn't exist
        if (!result[Type])
            result[Type] = {};
        // Create interaction if it doesn't exist
        if (!result[Type][Key])
            result[Type][Key] = {[Type.slice(0, -1)]: QuestorOrder, responses: []};
        result[Type][Key].responses.push(Response);
    }
    return result;
}
