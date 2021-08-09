import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultItemComponent } from './components/result/result-item/result-item.component';
import { ResultComponent } from './components/result/result.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [AppComponent, ResultComponent, ResultItemComponent, HeaderComponent, SearchPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
