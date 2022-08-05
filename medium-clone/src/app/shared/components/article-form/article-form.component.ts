import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendErrors } from 'src/app/shared/types/backendErrors.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleInput } from '../../types/articleInput.interface';

@Component({
    selector: 'mc-article-form',
    templateUrl: './article-form.component.html',
    styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
    @Input('initialValues') initialValuesProps: ArticleInput;
    @Input('isSubmitting') isSubmittingProps: boolean;
    @Input('errors') errorsProps: BackendErrors | null;

    @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInput>();

    form: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): void {
        this.form = this.formBuilder.group({
            title: [this.initialValuesProps.title, Validators.required],
            description: [this.initialValuesProps.description, Validators.required],
            body: [this.initialValuesProps.body, Validators.required],
            tagList: [this.initialValuesProps.tagList.join(' ')],
        });
    }

    onSubmit(): void {
        const article: ArticleInput = { ...this.form.value, tagList: this.form.value['tagList'].split(' ') }
        this.articleSubmitEvent.emit(article);
    }

}
