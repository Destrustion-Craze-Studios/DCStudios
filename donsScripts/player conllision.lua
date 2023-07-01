local PhysicsService = game:GetService("PhysicsService")

PhysicsService:RegisterCollisionGroup("Player")
PhysicsService:CollisionGroupSetCollidable("Player", "Player", false)

game.Players.PlayerAdded:Connect(function(player)
    player.CharacterAdded:Connect(function(character)
        for _, obj in pairs(character:GetDescendants()) do
            if obj:IsA("BasePart") then
                obj.CollisionGroup = "Player"
            end
        end
    end)
end)
