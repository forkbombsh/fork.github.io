local t = "a"

local o = {}

for i = 1, 60 do
    local lspaces = {}
    for j = 1, 100 do
        lspaces[#lspaces + 1] = " "
    end
    for j = 1, math.sin(i / 7.5) * 20 do
        lspaces[#lspaces + 1] = " "
    end
    if math.sin(i / 7.5) * 20 < 0 then
        for j = -math.sin(i / 7.5) * 20, 1, -1 do
            table.remove(lspaces, #lspaces)
        end
    end
    o[#o + 1] = table.concat(lspaces, "") .. t
end

print(table.concat(o, "\n"))
