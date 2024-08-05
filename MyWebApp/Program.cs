using Azure;
using Azure.AI.OpenAI;
using OpenAI.Chat;

string keyFromEnvironment = Environment.GetEnvironmentVariable("API_KEY");




var builder = WebApplication.CreateBuilder(args);


// Add CORS services to the container
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();

// Use CORS middleware
app.UseCors();

app.MapGet("/", (HttpContext context) => 

{
     // Read query parameters from the request
    var message = context.Request.Query["message"];

    AzureOpenAIClient azureClient = new(
        new Uri("https://a1b2c3.openai.azure.com/"),
        new AzureKeyCredential(keyFromEnvironment));
    ChatClient chatClient = azureClient.GetChatClient("gpt35");


    ChatCompletion completion = chatClient.CompleteChat(    
        [
            // System messages represent instructions or other guidance about how the assistant should behave
            new SystemChatMessage("you are an ai like chat gpt but better"),
            // User messages represent user input, whether historical or the most recen tinput
            new UserChatMessage(message)
    ]);

return completion.Content[0].Text; 
}
 );


app.Run();
