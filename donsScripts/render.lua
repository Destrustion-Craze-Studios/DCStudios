local RenderDistance = 50

local Players = game:GetService('Players')
local Player = game.Players.LocalPlayer
local Character = Player.Character or Player.CharacterAdded:Wait()
local HumanoidRootPart = Character:WaitForChild('HumanoidRootPart')

local renderedFolder = Instance.new("Folder", game:GetService("ReplicatedStorage"))
renderedFolder.Name = "renderedDistanced"

coroutine.wrap(function()
    while task.wait(1) do
        for i, v in pairs(game:GetDescendants()) do
            if v:IsDescendantOf(workspace) or v:IsDescendantOf(renderedFolder) then
                if v:IsA('Part') and (HumanoidRootPart.Position - v.Position).Magnitude > RenderDistance then
                    v.Parent = renderedFolder
                elseif v:IsA('Part') then
                    v.Parent = workspace
                end
            end
        end
    end
end)()
